require 'set'

def count_intersects(number_ranks)
  intersects_counter = 0
  
  combinations_ranks = number_ranks.combination(2).to_a
  combinations_ranks.each do |rank|
    first_rank = Set.new(rank[0][0]..rank[0][1])
    second_rank = Set.new(rank[1][0]..rank[1][1])

    intersects_counter += 1 if first_rank.intersect? second_rank
  end

  intersects_counter
end

count_intersects([[40, 85], [10, 60], [70, 160]])
