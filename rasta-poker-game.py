def main():
    # Create a deck of cards
  deck = deck()
    # Shuffle the deck
  deck.shuffle()
    # Create two players
  player1 = player1("Player 1")
  player2 = player2("Player 2")
    # Deal the cards to the two players
  deck.deal(player1, player2)
    # Display the two players' hands
  print(player1)
  print(player2)
    # Find the winner of the game
  winner = player1.wins(player2)
    # Print the results of the game
  print("The winner of the game is", winner)



# Path: card.py
class Card:
    # Initialize a Card object
  def __init__(self, suit, rank):
    self.suit = suit
    self.rank = rank

    # Return the suit of the card
  def get_suit(self):
    return self.suit

    # Return the rank of the card
  def get_rank(self):
    return self.rank

    # Return the numeric value of the card
  def get_value(self):
    if self.rank == "Ace":
      return 14
    elif self.rank == "King":
      return 13
    elif self.rank == "Queen":
      return 12
    elif self.rank == "Jack":
      return 11
    else:
      return int(self.rank)

    # Return the string representation of the card
  def __str__(self):
    return self.rank + " of " + self.suit
  
    # Compare the rank of this card with the rank of another card
  def __gt__(self, other):
    return self.get_value() > other.get_value()
  
    # Compare the rank of this card with the rank of another card 
  def __lt__(self, other):
    return self.get_value() < other.get_value()
  
    # Compare the rank of this card with the rank of another card 
  def __eq__(self, other):
    return self.get_value() == other.get_value()






     


