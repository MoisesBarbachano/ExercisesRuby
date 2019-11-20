class Dictionary
  @words = {
    department: 'departamento',
    tenant: 'inquilino',
    owner: 'propietario',
    rent: 'renta'
  }

  def self.translate(idiom, word)
    word = word.downcase
    idiom = idiom.downcase
    @words.each do |english_word, spanish_word|
      case idiom
        when 'english'
          break english_word if spanish_word.to_s == word.to_s
        when 'spanish'
          break spanish_word if english_word.to_s == word.to_s
        end
    end
  end
end

puts Dictionary.translate('english', 'Inquilino')
puts Dictionary.translate('Spanish', 'Tenant')