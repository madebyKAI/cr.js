# Profile

?> Represents a player's profile.

## Methods

##### getClan() ⇒ `Promise<Clan>`
- Returns: A clan object containing information about the clan.

## Attributes

> **`tag`** - The tag associated with the profile    
**Returns:** `str`

> **`name`** - The name of the player.    
**Returns:** `str`

> **`trophies`** - The amount of trophies the player is currently at.    
**Returns:** `int`

> **`arena`** - The arena the player is currently at.    
**Returns:** [`Arena`]()

> **`legendaryTrophies`** - The amount of legendary trophies the player is currently at.    
**Returns:** `int`

> **`nameChanged`** - Weither the player has changed their name or not.    
**Returns:** `bool`

> **`globalRank`** - The global rank of the player.    
**Returns:** `int or null`

> **`level`** - The current xp level of the player.    
**Returns:** `int`

> **`xp`** - array of xp and xp required to level up.    
**Returns:** `[int, int]`

> **`tournamentCardsWon`** - Tornament cards the player has currently won.    
**Returns:** `int`

> **`highestTrophies`** - The highest trophies the player has reached.    
**Returns:** `int`

> **`threeCrownWins`** - The amount of three crown wins the player has won.    
**Returns:** `int`

> **`cardsFound`** - The amount of cards the player has unlocked.    
**Returns:** `int`

> **`favouriteCard`** - The current favourite card of the player.    
**Returns:** `str`

> **`totalDonations`** - The amount of donations the player has currently made.    
**Returns:** `int`

> **`challengeMaxWins`** - The most wins the player has got in an challenge.    
**Returns:** `int`

> **`challengeCardsWon`** - The total amount of cards won by the player in a challenge.    
**Returns:** `int`

> **`totalGames`** - The total amount of game the player has currently played.    
**Returns:** `int`

> **`tournamentGames`** - The amount of tornaments the player has played.    
**Returns:** `int`

> **`wins`** - The ammount wins the player has currently recieved.    
**Returns:** `int`

> **`losses`** - The ammount losses the player has currently recieved.    
**Returns:** `int`

> **`draws`** - The ammount draws the player has currently recieved.    
**Returns:** `int`

> **`currentWinStreak`** - The player's current win streak.    
**Returns:** `int`

> **`chestCycle`** - The player's chest cycle.    
**Returns:** [`Cycle`]()

> **`chestCyclePosition`** - The position of the chest cycle the player is currently on.    
**Returns:** `int`

> **`deck`** - An arr containing the player's current, selected deck.    
**Returns:** [ [`Card`](), [`Card`](), [`Card`](), [`Card`](), [`Card`](), [`Card`](), [`Card`](), [`Card`](), ]

> **`clanTag`** - The tag of the player's current clan.    
**Returns:** `str or null`

> **`clanName`** - The name of the player's current clan.    
**Returns:** `str or null`

> **`clanRole`** - The role of the player in their current clan.    
**Returns:** `str or null`

> **`clanBadge`** - Url to the badge of the player's current clan.    
**Returns:** `str or null`

> **`shopOffers`** - The player's upcoming shop offers.    
**Returns:** [`Shop`]()

> **`seasons`** - Array of the player's past seasons.    
**Returns:** [ [`Season`](), [`Season`](), [`Season`](), [`Season`]()... [`Season`]() ] 
