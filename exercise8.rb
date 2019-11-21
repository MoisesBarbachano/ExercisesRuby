def customer_state(session_id = nil)
  reconnect_data = reconnect(session_id)
  return reconnect_data if reconnect_data
  
  {state: 'online'}
end

def reconnect(session_id)
  return { state: 'chat_disabled' } unless Setting.get('chat')
  return { state: 'offline' } if session_id.nil? && Chat.active_agent_count([id]).zero?
  
  waiting_count = Chat.waiting_chat_count(id)
  return { state: 'no_seats_available', queue: waiting_count } if session_id.nil? && waiting_count >= max_queue
  
  chat_user = check_chat_session(session_id)
  return chat_user if chat_user[:state]
  
  return session if get_messages_session(chat_user)
end

def check_chat_session(session_id)
  return unless session_id
  
  chat_session, chat_user = nil
  chat_session = Chat::Session.find_by(session_id: session_id, state: %w[waiting running])
  return { state: 'reconnect', position: chat_session.position } if chat_session && chat_session.state == 'waiting'
  
  if chat_session && chat_session.state == 'running' && chat_session.user_id
    chat_user = User.lookup(id: chat_session.user_id)
  end

  chat_user
end

def get_messages_session(chat_user)
  session_data = nil
  if chat_user && chat_user.image && chat_user.image != 'none'
    session_data[:url] = "#{Setting.get('http_type')}://#{Setting.get('fqdn')}/api/v1/users/image/#{chat_user.image}"
    session_data[:user] = { name: chat_user.fullname, avatar: url }
    session_data[:session] = Chat::Session.messages_by_session_id(session_id)
  end
  return {state: 'reconnect', session: session_data[session], agent: session_data[user]} if session_data[:session]
    
  session_data
end
