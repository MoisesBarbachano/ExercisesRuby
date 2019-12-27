def touch_current_customer(record)
  return true if Setting.get('import_mode')

  organization_id_changed = record.saved_changes['organization_id']
  return unless organization_id_changed

  member_ids = check_different_members(organization_id_changed)
  return unless member_ids

  members_id_record = check_record(record)
  return unless members_id_record

  member_ids += members_id_record

  touch_current_user(member_ids)
end

def check_different_members(organization_id_changed)
  first_organization = organization_id_changed[0]
  second_organization = organization_id_changed[1]
  return if first_organization == second_organization

  users_organization = User.where(organization_id: first_organization).count
  return unless users_organization < 100

  organization = Organization.find(first_organization)
  organization.touch
  
  organization.member_ids
end

def check_record(record)
  return unless record.organization

  users_organization = User.where(organization_id: record.organization_id)
  return unless users_organization.count < 100

  record.organization.touch

  record.organization.member_ids
end

def touch_current_user(member_ids)
  unique_members = member_ids.uniq
  user_touched = true

  unique_members.each do |user_id|
    next if user_id == record.id
    return user_touched if User.find(user_id).touch
  end

  user_touched
end