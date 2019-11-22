def assets(data)
  self_created = self['created_by_id']
  return data unless self_created

  data_assets = data
  app_model = self.class.to_app_model
  data_assets[app_model] = attributes_app_model(data_assets)

  data_user = user_assets(data_assets, self_created)
end 

def attributes_app_model(data)
  data_app_model = data
  return data_app_model[app_model] if data_app_model[app_model][id]
    
  data_app_model[app_model] = {} unless data_app_model[app_model]
  local_attributes = attributes_with_association_ids
  local_attributes['object'] = ObjectLookup.by_id(local_attributes['activity_stream_object_id'])
  local_attributes['type'] = TypeLookup.by_id(local_attributes['activity_stream_type_id'])
  data_app_model[app_model][id] = local_attributes
  ApplicationModel.assets_of_object_list([local_attributes], data_app_model)

  data_app_model[app_model]
end

def user_assets(data, self_created)
  app_model_user = User.to_app_model
  data_app_model = data[app_model_user]
  data_local_user = data[app_model_user][self_created]
  return data if data_app_model && data_local_user
  
  user = User.lookup(id: self_created)
  return data unless user
  
  data_user = user.assets(data)
end