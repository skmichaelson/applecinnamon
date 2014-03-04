class ContentsController < ApplicationController
  def send_message
    raw_message = params[:message]
    msg = UserMailer.contact_me(raw_message)
    msg.deliver!

    render :index
  end

  def index
  end
end
