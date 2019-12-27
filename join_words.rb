def join_words(words, limit)
  words_joined = words.join
  words_size = words_joined.size
  rest_words = words_size % limit
  index_rest = words_size - rest_words
  words_quantity = '.' * limit

  words_limited = words_joined.scan(/#{words_quantity}/)
  rest_limited = words_joined[index_rest..words_size]
  
  words_limited.push(rest_limited)
end

join_words(['hola', 'este', 'es', 'un', 'nuevo', 'mensajes'], 10)