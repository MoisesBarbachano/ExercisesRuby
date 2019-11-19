class Person
  attr_accessor :age, :name, :last_name, :gender

  def initialize(age, name, last_name, gender)
    @age = age
    @name = name
    @last_name = last_name
    @gender = gender
  end

  def get_attributes
    attributes = { age: @age, name: @name, last_name: @last_name, gender: @gender }
  end
end

class Contact
  @contacts = []
  @contacts << Person.new(20, 'Jose', 'Lopez', :male).get_attributes
  @contacts << Person.new(21, 'Oscar', 'Perez', :male).get_attributes
  @contacts << Person.new(22, 'Martha', 'Sanchez', :female).get_attributes

  def self.all
    @contacts
  end

  def self.find_by(attribute, value)
    @contacts.each do |contact|
      break contact if contact[attribute] == value
    end
  end
end

Contact.all
Contact.find_by(:age, 21)
