require_relative "board"
require_relative "player"

class Battleship
    attr_reader :player, :board
    def initialize(length)
        @player = Player.new
        @board = Board.new(length)
        @remaining_misses = (length * length) / 2
    end

    def start_game
        @board.place_random_ships
        puts "Number of ships:#{@board.num_ships}"
        @board.print

    end
    def lose?
        if @remaining_misses <= 0
            puts "you lose"
            return true
        else
            return false
        end
    end

    def win?
        if @board.num_ships == 0
            puts "you win"
            return true
        else
            return false
        end
    end

    def game_over?
        self.win? || self.lose?
    end

    def turn
        move = @player.get_move
        if !@board.attack(move)
            @remaining_misses -= 1
        end
        @board.print
        puts "number of misses: #{@remaining_misses}" 
    end
end


