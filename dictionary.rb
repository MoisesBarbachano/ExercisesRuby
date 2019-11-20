class Dictionary
  @words = { department: 'departamento',
             tenant: 'inquilino',
             owner: 'propietario',
             rent: 'renta'
            }

  def self.translate(idiom, word)
    @words.each do |english_word, spanish_word|
      case idiom
        when "English"
          break english_word if spanish_word.to_s == word.to_s
        when "Spanish"
          break spanish_word if english_word.to_s == word.to_s
        end
    end
  end
end

Dictionary.translate("English", "inquilino")
Dictionary.translate("Spanish", "tenant")