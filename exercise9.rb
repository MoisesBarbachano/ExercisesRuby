def add_organization_name
  name = fullname
  return name unless organization_id

  organization = Organization.lookup(id: organization_id) if organization_id
  organization ? name += " (#{organization.name})" : name
end
