# -------------------------------------
# Index Page
# -------------------------------------

get '/' do
  erb :index
end

# -------------------------------------
# List Contact
# -------------------------------------

get '/contact' do
  content_type :json
  @contacts = Contact.all
  @contacts.to_json
end

# -------------------------------------
# New Contact
# -------------------------------------

post '/new' do
  content_type :json
  @contact = Contact.new(
    photo: Faker::Avatar.image,
    first_name: params[:first_name],
    last_name: params[:last_name],
    company: params[:company],
    email: params[:email],
    phone: params[:phone]
    )
  if @contact.save
    @contact.to_json
  else
    @contact.errors.to_json
  end
end

# -------------------------------------
# Search
# -------------------------------------

get '/search' do
  
end

  
