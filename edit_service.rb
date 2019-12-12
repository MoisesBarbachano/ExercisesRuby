def edit_service
  return unless check_session

  activity_found = Activity.find_by_id(params['activity_id'])
  technician_found = Technician.find_by_user_id(params['technician_id'])
  status_found = Status.find_by_id(params['status_id'])

  service_changed = activity_found || technician_found || status_found
  return render json: 'false' unless service_changed

  service = Service.find_by_id(params['service_id'])
  actual_user = User.find_by_id(session[:current_user_id])

  add_observation_activity(actual_user, service, activity_found)
  add_observation_technician(actual_user, service, technician_found)
  add_observation_status(actual_user, service, status_found)

  check_update_service(activity_found, technician_found, status_found)

  generate_logs(activity_found, technician_found, status_found)

  render json: 'true'
end

def check_session
  if checkIfSessionNotExist
    redirect_to welcome_index_path
    return
  end

  true
end

def check_update_service(activity, technician, status)
  service.activity = activity if activity
  service.technician = technician if technician
  service.status = status if status

  service.save
end

def add_observation_activity(user, service, activity)
  return unless activity

  previous_activity = service.activity.name
  new_activity = activity.name
  observation_activity = "la actividad:\n #{previous_activity} -> #{new_activity}"

  add_observation(user, service, observation_activity)
end

def add_observation_technician(user, service, technician)
  return unless technician

  previous_technician = '( -- )'
  new_technician = technician.user.username
  previous_technician = service.technician.user.username if service.technician
  observation_technician = "el técnico:\n #{previous_technician} -> #{new_technician}"

  add_observation(user, service, observation_technician)
end

def add_observation_status(user, service, status)
  return unless status

  previous_status = service.status.name
  new_status = status.name
  observation_status = "el status:\n #{previous_status} -> #{new_status}"

  add_observation(user, service, observation_status)
end

def add_observation(user, service, observation_text)
  observation_info = "Se ha cambiado #{observation_text}"
  Observation.create(user: user, service: service, info: observation_info)
end

def generate_logs(activity, technician, status)
  generateLog('CAMBIAR_ACTIVIDAD', nil) if activity
  generateLog('CAMBIAR_TECNICO', nil) if technician
  generateLog('CAMBIAR_ESTATUS', nil) if status
end