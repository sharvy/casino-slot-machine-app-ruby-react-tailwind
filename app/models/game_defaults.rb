class GameDefaults
  INITIAL_CREDIT = 10
  PER_ROLL = 1
  
  def self.re_roll_chance(credit)
    return 30 if credit >= 40 && credit <= 60
    return 60 if credit > 60
    
    return 0
  end
end
