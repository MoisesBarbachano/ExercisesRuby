def phrase_include?(words, phrase)
  index_words = []
  found_words = []

  found_words = words.keep_if do |word|
    index_words << phrase.index(word) if phrase.include?(word)
  end

  order_words(found_words, index_words)
end

def order_words(words, index_words)
  ordered_words = {}

  words.each_with_index do |word, index|
    word_order = index_words[index]
    ordered_words[word_order] = word
  end
  ordered_words = ordered_words.sort.to_h

  ordered_words.values
end

phrase_include?(['hola', 'de', 'nuevo'], 'denuevohola')