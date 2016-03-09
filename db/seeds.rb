# @first_3 = rand(200...800)
# @last_4 = rand(1000...9999)

# 2.times do
# Contact.create(
#   photo: Faker::Avatar.image,
#   first_name: Faker::Name.first_name,
#   last_name: Faker::Name.last_name,
#   company: Faker::Company.name,
#   email: Faker::Internet.free_email,
#   phone: "(604)#{@first_3}-#{@last_4}"
#   )
# end