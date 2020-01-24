def movements_to_be(word, other_word)
  word = add_spaces(word, other_word) if other_word.include?(word)
  word = check_to_delete(word, other_word) if word.include?(other_word)

  word.each_char.with_index do |character, index|
    next puts "Agregar #{other_word[index]}" if character.eql?(' ')
    next puts "Eliminar #{character}" if other_word[index].nil?
    next puts "Reemplazar #{character} por #{other_word[index]}" unless character.eql?(other_word[index])
  end
  add_characters(word, other_word)
 
  word
end

def add_spaces(word, other_word)
  characters_to =  other_word.index(word)
  spaced_word =  word.insert(0, ' ' * characters_to)
  difference_length = other_word.length - spaced_word.length 
  spaced_word << (' ' * difference_length) unless difference_length == 0 

  spaced_word
end

def check_to_delete(word, other_word)
  characters_to = word.index(other_word)
  rest_word = word[characters_to..-1]
  word.each_char.with_index do |character, index|
    return rest_word if index.eql?(characters_to)
    
    puts "Eliminar #{character}"
  end

  rest_word
end

def add_characters(word, other_word)
  difference_words = other_word.length - word.length
  return unless difference_words.positive?

  last_characters = other_word.split(//).last(difference_words)

  last_characters.map {|character| puts "Agregar #{character}"} if difference_words.positive?
end

movements_to_be('dado', 'candado')