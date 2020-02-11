namespace :listings do
  desc "Generate listings"
  task generate_listings: :environment do
    mercado_libre_provider = ListingProvider.find_or_create_by(name: 'mercado_libre')

    home1 = Home.find_or_create_by!(
      title: 'depa1',
      price: 2000.00,
      extra_service: 0.00,
    )
    home2 = Home.find_or_create_by!(
      title: 'depa2',
      price: 1000.00,
      extra_service: 0.00,
    )
    home3 = Home.find_or_create_by!(
      title: 'depa3',
      price: 200.00,
      extra_service: 0.00,
    )
    home4 = Home.find_or_create_by!(
      title: 'depa4',
      price: 800.00,
      extra_service: 0.00,
    )
    home5 = Home.find_or_create_by!(
      title: 'depa5',
      price: 500.00,
      extra_service: 0.00,
    )
    home6 = Home.find_or_create_by!(
      title: 'depa6',
      price: 600.00,
      extra_service: 0.00,
    )
    home7 = Home.find_or_create_by!(
      title: 'depa7',
      price: 100.00,
      extra_service: 0.00,
    )
    home8 = Home.find_or_create_by!(
      title: 'depa8',
      price: 100.00,
      extra_service: 0.00,
    )
    home9 = Home.find_or_create_by!(
      title: 'depa9',
      price: 1500.00,
      extra_service: 0.00,
    )

    publish1_xml = {
      title: home1.title,
      listing_type_id: :gold,
      price: home1.price
    }.to_s
    Home::Listing.find_or_create_by(
      home: home1,
      publish_xml_or_response: publish1_xml,
      listing_name: 'mercado_libre'
    )
    publish2_xml = {
      title: home2.title,
      listing_type_id: :silver,
      price: home2.price
    }.to_s
    Home::Listing.find_or_create_by(
      home: home2,
      publish_xml_or_response: publish2_xml,
      listing_name: 'mercado_libre'
    )
    publish4_xml = {
      title: home4.title,
      listing_type_id: :gold_premium,
      price: home4.price
    }.to_s
    Home::Listing.find_or_create_by(
      home: home4,
      publish_xml_or_response: publish4_xml,
      listing_name: 'mercado_libre'
    )
    publish5_xml = {
      title: home5.title,
      listing_type_id: :gold,
      price: home5.price
    }.to_s
    Home::Listing.find_or_create_by(
      home: home5,
      publish_xml_or_response: publish5_xml,
      listing_name: 'mercado_libre'
    )
    publish6_xml = {
      title: home6.title,
      listing_type_id: :gold_premium,
      price: home6.price
    }.to_s
    Home::Listing.find_or_create_by(
      home: home6,
      publish_xml_or_response: publish6_xml,
      listing_name: 'mercado_libre'
    )
    publish7_xml = {
      title: home7.title,
      listing_type_id: :gold_premium,
      price: home7.price
    }.to_s
    Home::Listing.find_or_create_by(
      home: home7,
      publish_xml_or_response: publish7_xml,
      listing_name: 'mercado_libre'
    )
    publish8_xml = {
      title: home5.title,
      listing_type_id: :gold_premium,
      price: home5.price
    }.to_s
    Home::Listing.find_or_create_by(
      home: home8,
      publish_xml_or_response: publish8_xml,
      listing_name: 'mercado_libre'
    )
    publish9_xml = {
      title: home9.title,
      listing_type_id: :silver,
      price: home9.price
    }.to_s
    Home::Listing.find_or_create_by(
      home: home9,
      publish_xml_or_response: publish9_xml,
      listing_name: 'mercado_libre'
    )

    Home::Listing::Outstanding.find_or_create_by(
      home: home1,
      listing_provider: mercado_libre_provider,
      _outstanding_type: :gold
    )
    Home::Listing::Outstanding.find_or_create_by(
      home: home2,
      listing_provider: mercado_libre_provider,
      _outstanding_type: :gold_premium
    )
    Home::Listing::Outstanding.find_or_create_by(
      home: home3,
      listing_provider: mercado_libre_provider,
      _outstanding_type: :gold
    )
    Home::Listing::Outstanding.find_or_create_by(
      home: home4,
      listing_provider: mercado_libre_provider,
      _outstanding_type: :gold
    )
    Home::Listing::Outstanding.find_or_create_by(
      home: home6,
      listing_provider: mercado_libre_provider,
      _outstanding_type: :gold_premium
    )
    Home::Listing::Outstanding.find_or_create_by(
      home: home7,
      listing_provider: mercado_libre_provider,
      _outstanding_type: :gold_premium
    )
    Home::Listing::Outstanding.find_or_create_by(
      home: home8,
      listing_provider: mercado_libre_provider,
      _outstanding_type: :gold
    )
  end
end
