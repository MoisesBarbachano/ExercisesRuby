def phrase_include?(words, phrase)
  found_words = {}

  words.each do |word|
    found_words[phrase.index(word)] = word if phrase.include?(word)
  end
  found_words = found_words.sort.to_h

  found_words.values
end

phrase_include?(['hola', 'de', 'nuevo'], 'denuevohola')