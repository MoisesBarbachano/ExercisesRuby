class Homes::ByListingTypes
  include Interactor

  MERCADO_LIBRE = 'mercado_libre'
  SUM_ONE = 1

  def call
    context.compared_homes = {}

    listings_compare, listings_types = check_not_should_sent
    outstanding_compare, outstandings_types = check_should_sent
    fine_listings = listings_compare & outstanding_compare
    should_not_sent = listings_compare - fine_listings
    should_send = outstanding_compare - fine_listings
    context.compared_homes[:should_not_sent] = insert_results(should_not_sent, listings_types)
    context.compared_homes[:should_sent] = insert_results(should_send, outstandings_types)
  end

  def check_not_should_sent
    listings = Home::Listing.where(listing_name: MERCADO_LIBRE)

    transform_homes(listings)
  end

  def check_should_sent
    outstandings_mercadolibre = []

    outstandings = Home::Listing::Outstanding.all
    outstandings.each do |data|
      outstandings_mercadolibre.push(data) if data.listing_provider.name == MERCADO_LIBRE
    end

    transform_homes(outstandings_mercadolibre)
  end

  def transform_homes(homes_info)
    transformed_data = []
    types = []

    homes_info.each do |home_info|
      data_compare = {}
      data_compare[:home_id] = home_info.home.id
      defined?(home_info.outstanding_type) ? data_type = home_info.outstanding_type : data_type = listing_type_info(home_info)
      data_compare[:type] = data_type
      types.push(data_compare[:type])
      transformed_data.push(data_compare)
    end

    [transformed_data, types.uniq]
  end

  def listing_type_info(info)
    sent_info = info.publish_xml_or_response
    sent_info = eval(sent_info)

    sent_info[:listing_type_id]
  end

  def insert_results(homes_insert, types)
    homes_result = {}

    types.each do |type|
      homes_result[type] = { count: 0, ids: [] }
      homes_insert.each do |listing_home|
        next unless listing_home[:type] == type

        homes_result[type][:count] += SUM_ONE
        homes_result[type][:ids] << listing_home[:home_id]
      end
    end

    homes_result
  end
end