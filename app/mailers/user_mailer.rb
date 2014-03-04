class UserMailer < ActionMailer::Base
  default from: "from@example.com"

  def contact_me(form_data)
    @body = form_data[:body]
    mail(from: form_data[:email], to: "sarah.michaelson@gmail.com", subject: form_data[:subject])
  end
end
