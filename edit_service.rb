def edit_service
  return unless user_logged?

  service = Service.find_by_id(params['service_id'])
  actual_user = User.find_by_id(session[:current_user_id])
  activity_found = change_activity(params['activity_id'], service, actual_user)
  technician_found = change_technician(params['technician_id'], service, actual_user)
  status_found = change_status(params['status_id'], service, actual_user)

  check_update_service(activity_found, technician_found, status_found, service)

  render json: 'true'
end

def user_logged?
  logged = true

  if checkIfSessionNotExist
    redirect_to welcome_index_path
    logged = false
  end

  logged
end

def change_activity(activity_id, service, actual_user)
  activity_found = Activity.find_by_id(activity_id)
  return unless activity_found

  add_observation_activity(actual_user, service, activity_found)

  activity_found
end

def change_technician(technician_id, service, actual_user)
  technician_found = Technician.find_by_user_id(technician_id)
  return unless technician_found

  add_observation_technician(actual_user, service, technician_found)

  technician_found
end

def change_status(status_id, service, actual_user)
  status_found = Status.find_by_user_id(status_id)
  return unless status_found

  add_observation_status(actual_user, service, technician_found)

  status_found
end

def add_observation_activity(user, service, activity)
  previous_activity = service.activity.name
  new_activity = activity.name
  observation_activity = "la actividad:\n #{previous_activity} -> #{new_activity}"

  add_observation(user, service, observation_activity)
end

def add_observation_technician(user, service, technician)
  previous_technician = '( -- )'
  new_technician = technician.user.username
  previous_technician = service.technician.user.username if service.technician
  observation_technician = "el técnico:\n #{previous_technician} -> #{new_technician}"

  add_observation(user, service, observation_technician)
end

def add_observation_status(user, service, status)
  previous_status = service.status.name
  new_status = status.name
  observation_status = "el status:\n #{previous_status} -> #{new_status}"

  add_observation(user, service, observation_status)
end

def add_observation(user, service, observation_text)
  observation_info = "Se ha cambiado #{observation_text}"
  Observation.create(user: user, service: service, info: observation_info)
end

def check_update_service(activity, technician, status, service)
  service.activity = activity if activity
  service.technician = technician if technician
  service.status = status if status

  generate_Logs(activity, technician, status)

  service.save
end

def generate_logs(activity, technician, status)
  generateLog('CAMBIAR_ACTIVIDAD', nil) if activity
  generateLog('CAMBIAR_TECNICO', nil) if technician
  generateLog('CAMBIAR_ESTATUS', nil) if status
end