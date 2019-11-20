class Dictionary
  @words = {
    department: 'departamento',
    tenant: 'inquilino',
    owner: 'propietario',
    rent: 'renta'
  }

  def self.translate(language, word)
    word = word.downcase.to_s
    language = language.downcase

    case language
    when 'english'
      @words.key(word)
    when 'spanish'
      @words[word.to_sym]
    else
      "The language #{language} is not found"
    end
  end
end

Dictionary.translate('english', 'Inquilino')
Dictionary.translate('Spanish', 'Tenant')
Dictionary.translate('Arabic', 'Tenant')