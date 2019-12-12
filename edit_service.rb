def editService
  if checkIfSessionNotExist
    redirect_to welcome_index_path
    return
  end
  @service = Service.find_by_id(params['service_id'])
  @userActual = User.find_by_id(session[:current_user_id])
  @serviceActual = Service.find_by_id(params["service_id"])
  if params['activity_id'] != ""
    @activityNew = Activity.find_by_id(params['activity_id'])

    @observationActivity = Observation.new
    @observationActivity.user = @userActual
    @observationActivity.service = @serviceActual
    @observationActivity.info = "Se ha cambiado la actividad:\n" + @service.activity.name + " -> " + @activityNew.name

    @service.activity = @activityNew
    @observationActivity.save
    generateLog("CAMBIAR_ACTIVIDAD",nil)
  end
  if params['technician_id'] != ""
    @technicianNew = Technician.find_by_user_id(params['technician_id'])

    @observationTechnician = Observation.new
    @observationTechnician.user = @userActual
    @observationTechnician.service = @serviceActual
    if @service.technician == nil
      @observationTechnician.info = "Se ha cambiado el técnico:\n" + "( -- )" + " -> " + @technicianNew.user.username
    else
      @observationTechnician.info = "Se ha cambiado el técnico:\n" + @service.technician.user.username + " -> " + @technicianNew.user.username
    end

    @service.technician = @technicianNew
    @observationTechnician.save
    generateLog("CAMBIAR_TECNICO",nil)
  end
  if params['status_id'] != ""
    @statusNew = Status.find_by_id(params['status_id'])

    @observationStatus = Observation.new
    @observationStatus.user = @userActual
    @observationStatus.service = @serviceActual
    @observationStatus.info = "Se ha cambiado el status:\n" + @service.status.name + " -> " + @statusNew.name

    @service.status = @statusNew
    @observationStatus.save
    generateLog("CAMBIAR_ESTATUS",nil)
  end

  @service.save

  render json: "true"
end