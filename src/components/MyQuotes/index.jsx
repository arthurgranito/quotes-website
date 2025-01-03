import React, { useEffect, useState } from 'react'
import html2canvas from 'html2canvas';
import { Blockquote } from '../ui/blockquote';
import { Button } from '@chakra-ui/react';
import { Group } from '@chakra-ui/react';
import { EmptyState } from '../ui/empty-state';
import { ImFileEmpty } from "react-icons/im";
import { Link } from 'react-router-dom';

const MyQuotes = () => {
    const [quotes, setQuotes] = useState([]);

    const downloadQuote = (() => {
        const quoteImg = document.getElementById('quote');

        html2canvas(quoteImg, {
            backgroundColor: null,
            useCORS: true,
            scrollY: 0,
        }).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'quote.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    })

    useEffect(() => {
        const myQuotes = JSON.parse(localStorage.getItem('myQuotes')) || [];
        setQuotes(myQuotes);
    }, [])

    const deleteQuote = (index) => {
        const storedQuotes = JSON.parse(localStorage.getItem('myQuotes')) || [];

        const updatedQuotes = storedQuotes.filter((_, i) => i !== index);

        localStorage.setItem('myQuotes', JSON.stringify(updatedQuotes));

        setQuotes(updatedQuotes)
    }

    return (
        <>
            <div className='container'>
                {quotes.length === 0 ? (
                    <div className="main">
                        <EmptyState
                            icon={<ImFileEmpty />}
                            title="You don't have any quotes yet"
                            description="Create a new quote now"
                        >
                            <Link to={'/'}>
                                <Button className='error-btn'>Create Quote</Button>
                            </Link>
                        </EmptyState>
                    </div>
                ) : (

                    quotes.map((quote, index) => (
                        (
                            <>
                                <div className="quote-container">
                                    <Blockquote showDash cite={quote.author} className='blockquote' id='quote' key={index}>
                                        <div className="quote-content">
                                            {quote.quote}
                                        </div>
                                    </Blockquote>

                                    <div className="btn-container">
                                        <Button className='delete-quote-btn' onClick={() => {
                                            deleteQuote(index)
                                        }}>Delete Quote</Button>
                                        <Button className='download-btn' variant='outline' onClick={() => {
                                            downloadQuote();
                                        }}>Download Quote</Button>
                                    </div>
                                </div>
                            </>
                        )
                    ))
                )}
            </div>

        </>
    )
}

export default MyQuotes