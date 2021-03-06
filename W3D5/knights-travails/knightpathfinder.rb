require_relative "../polytreenode/skeleton/lib/00_tree_node.rb"

class KnightPathFinder

    def self.valid_moves(current_pos)
        row, col = current_pos
        row >= 0 && row < 8 && col >= 0 && col < 8 
    end

    def initialize(start_pos, end_pos)
        @root_node = start_pos
        @end_pos =  end_pos
        @considered_positions = [start_pos]
        self.build_move_tree
    end

    def build_move_tree
        move_tree = PolyTreeNode.new(@root_node)
        

        until @root_node == @end_pos
            positions = new_move_positions(@root_node)
            positions.each do |child|
<<<<<<< HEAD
                move_tree.parent = child
                move_tree.add_child(child) 
            end
            move_tree
        end




=======
            move_tree.parent = child
            move_tree.add_child(child) 
        end
>>>>>>> 5c0d8068f3a15b8eca0e3ec882aa522462300b26
    end

    def generate_positions(pos)
        positions = []
        row, col = pos
        positions << [(row + 1), (col + 2)]
        positions << [(row + 1), (col - 2)]
        positions << [(row - 1), (col + 2)]
        positions << [(row - 1), (col - 2)]

        positions << [(row + 2), (col + 1)]
        positions << [(row + 2), (col - 1)]
        positions << [(row - 2), (col + 1)]
        positions << [(row - 2), (col - 1)]

        return positions
    end

    def new_move_positions(current_pos)
        positions = generate_positions(current_pos)
        positions = positions.select do |pos|
            !@considered_positions.include?(pos) && KnightPathFinder.valid_moves(pos)
        end
        @considered_positions.concat(positions)
        positions
    end

end

p knight = KnightPathFinder.new([0,0])