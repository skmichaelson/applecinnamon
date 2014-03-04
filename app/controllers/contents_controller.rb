class ContentsController < ApplicationController
  def send_message
    raw_message = params[:message]
    msg = UserMailer.contact_me(raw_message)
    msg.send!
  end
end
