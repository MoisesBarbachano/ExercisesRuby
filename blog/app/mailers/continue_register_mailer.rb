class ContinueRegisterMailer < ApplicationMailer
  layout 'mailer'

  def send_list_ads
    mail(to: 'prueba@gmail.com', subject: '¡Continue tu registro y observa donde te anunciamos!')
  end
end
