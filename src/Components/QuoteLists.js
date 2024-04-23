import React from 'react'
import QuoteCard from './Quote'
import quotesData from '../quote.json'

const QuoteCardList = () => {
  return (
    <div className='quote-list'>
       {quotesData.quotes.map((quote, index) => (
           <QuoteCard key={index}
               text={quote.quote}
               author={quote.author} />
      ))}
    </div>
  )
}

export default QuoteCardList