class Utils
  class << self
    def take_a_chance?(percentage_of_chance)
      rand <= percentage_of_chance / 100.0
    end
  end
end
