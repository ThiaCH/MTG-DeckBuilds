## Magic: The Gathering Deck-Builds (Unofficial)

MAGIC: THE GATHERING was released in 1993 by Wizards of the Coast as a Trading Card Game but was later
acquired by Hasbro in 1999, where it remains as one of the top selling brands till present. MTG also have
a digital presence in the game industry across the years and the most recent title is "MTG Arena". 

To play the physical card game, players have to purchase cards from different Edition sets like Mirage, 
Fallen Empires, Phyrexia, March of the Machine and so on. Once each player has acquired the necessary cards,
they have to build a deck that holds a minimal of 60 cards. With that, they can use the deck to compete against
another player or a group of players.

Not all cards can be easily attain when going through the deck building experience. Therefore, players have 
to plan, search, trade or purchase cards from other collectors or players to make their deck. This part of the
deck building journey is an expensive one due to the rarity of certain cards.


## Reasons to develop this application

I used to play MTG from 1994 to 1998 and stopped due to the huge cost of building decks. Despite of that,
I enjoyed looking at all the different artworks on the cards that were made across the years.

Therefore, with the available MTG APIs, I have decided to make this application for players to source for cards and use it to build decks, build combo methods and save it into a list where they can go back and refer at anytime. In addition, I wanna help players to spend their money wisely before purchasing the card(s) they need for their deck building experience.

## How to use this application

<h3>Home Page</h3>

<p>In the home page, user are given a few filtering options to search the cards they need. I have only created 3 options as of now but will add more in future updates. The 3 search filters are Search by Card Name, Search by Set Name and Search by Rarity Types. In addition, user can click on any card in the list to view an enlarge version of the card image or flip through the huge list by clicking the Previous / Next Page Buttons which is located at the bottom of the screen. Lastly, the Navigation Bar at the top of the screen allows user to toggle between pages.</p>

  <p align="center">
      <img width="650" src="/resources/home-page.PNG">
  </p>

<h3>Decks Page</h3>

<p>For the deck page, user will be able to view the collection of Saved Decks where each of them will show the cards inside it.
To reveal it accordingly, the user just need to click on the <b>Cards Icon</b> and all the cards will show up from that selected deck. Secondly, the Saved Decks can be Updated or Remove from the collection by clicking the <b>Edit or Remove button</b> located at the bottom of the screen.</p>

  <p align="center">
      <img width="650" src="/resources/decks-page.PNG">
  </p>

<h3>Create New Deck Page</h3>

<p>This page is for user to build their deck from scratch. Firstly, the user has to input the Deck Name. After that, he/she can begin searching for cards from the Search Input and click on the <b>Add Card button</b> to populate the selected card into the empty slot. Once user is satisfy with their deck builds, he/she can click on the <b>Save Deck Button</b> to store the data and come back to review it another time if needed.</p>

  <p align="center">
      <img width="650" src="/resources/create-new-deck-page.PNG">
  </p>

<h3>Edit Page</h3>

<p>Last but not least, the edit page can only be access from the Decks Page as mention earlier. This allows flexibility for user
to modified their current decks. Almost like the Create Deck Page, the user can search, add or remove cards from the current list and update it into the database by clicking the <b>Save Deck Button</b>.</p>

  <p align="center">
      <img width="650" src="/resources/edit-deck-page.PNG">
  </p>

## What is needed to use this application
  <ul>
    <li> Mouse and Keyboard
  </ul>

## Getting Started
Click on the link to get started -
https://mtg-deck-builds.vercel.app/

## Technologies Used:
<ul>
  <li>React
  <li>Vite
  <li>Material UI
  <li>GitHub (with Vercel)
</ul>

## Creative Softwares Used
<ul>
  <li>Adobe Illustrator
</ul>

## Application Add-On (next version update)
<ul>
  <li>To have a “Liked Cards” section (Can be called “COLLECTION”)
  <li>Note-taking panel in “Edit Builds” for commenting, e.g. “Need more power hitters...”
  <li>More possibility for Filtering Search Options e.g. By Color, By Artist, By Strength.
  <li>Toggle add button to increase Deck Size (player who uses more than 60 cards)
<li>Improve Visual Design and UX
</ul>

## Wireframe of the application during planning stage
Below is the initial wireframe for this application. Some design layout were adjusted slightly 
during the development phase but generally majority remains as it is.

<p align="center">
    <img width="650" src="/resources/MTG-DeckBuilds-Wireframe.png">
</p>

## Challenges during the making of this application
<ul>
  <li> Transferring and retrieval of data from AirTable. 
  <li> Setting up the right data types in the Airtable.
  <li> Taking Data Objects from API and append it to another Div Element (e.g. Add Card to empty slot in the Create New Deck Page)
  <li> Adding pagination for home page as the API source restrict the return of results to 100 cards for each call.
  <li> Passing selected deck's data from Decks Page to Edit Page  
</ul>


## Key Learning points
<ol>
  <li>I discover that I can add in extra methods or conditions (inside the Async Function) to clean up the data from API before using it.
  <li>Setting up the routes properly at the start of the project was very important. In one situation, it helps to facilitates the passing of data from the decks page to the edit page. To make that happen, I included the used of useNavigate, useParams and useLocation. 
  <li>On my personal take, I feel that "blocking-out" the pages based on the wireframe design helps to further iron out any unforseen components that have not been properly consider.
</ol>

## Credit(s)
<ul>
  <li> Freepik (https://www.freepik.com/author/freepik)
  <li> Unofficial Magic: The Gathering API (https://magicthegathering.io/)
</ul>
