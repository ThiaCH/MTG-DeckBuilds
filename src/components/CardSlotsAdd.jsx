
export default function CardSlotsAdd ({ cardImages, setAddedCards }) {

  const handleRemoveCard = (event, index) => {
    event.preventDefault()
    const newCardImages = [...cardImages];
    newCardImages.splice(index, 1);
    setAddedCards(newCardImages)
  }

  // Create 60 slots for placing cards 
  const deckTable = [];
  for (let i = 0; i < 60; i++) {
    deckTable.push(
      <div key={i} className='card-slot'>
        {i < cardImages.length ? (
          <img src={cardImages[i]} 
            alt={`Card ${i + 1}`} 
            className="card-slot"
            onClick={(event) => handleRemoveCard(event, i)}
          />
        ) : (
          "Empty Slot"
        )}
      </div>
    );
  }

  return (
    <>
       <div className='create-deck-container'>{deckTable}</div>
    </>
  )
}