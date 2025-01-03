import React from 'react'
import { Fieldset } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Field } from '../ui/field'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Inicio = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [quoteInvalid, setQuoteInvalid] = useState(false);
  const [authorInvalid, setAuthorInvalid] = useState(false);
  const [myQuotes, setMyQuotes] = useState([]);
  const navigate = useNavigate();

  const createQuote = () => {
    if (quote == '' || author == '') {
      if (quote == '') {
        setQuoteInvalid(true);
      }
      if (author == '') {
        setAuthorInvalid(true);
      }
    } else {
      setQuoteInvalid(false);
      setAuthorInvalid(false);

      const storedQuotes = JSON.parse(localStorage.getItem('myQuotes')) || [];
      
      const updatedQuotes = [
        ...storedQuotes,
        {
          quote: `${quote}`,
          author: `${author}`,
        },
      ];

      setMyQuotes(updatedQuotes)

      localStorage.setItem('myQuotes', JSON.stringify(updatedQuotes))

      navigate(`/quote/${quote}/${author}`);
      setQuote('');
      setAuthor('');
    }
  }

  return (
    <div className='main'>
      <Fieldset.Root size="lg" maxW="md" className='form-container'>
        <Stack>
          <Fieldset.Legend className='form-title'>Create new quote</Fieldset.Legend>
          <Fieldset.HelperText>
            Please provide your quote details.
          </Fieldset.HelperText>
        </Stack>

        <form className='form' onSubmit={(e) => {
          e.preventDefault();
          createQuote();
        }} >
          <Fieldset.Content>
            {quoteInvalid ? (
              <Field label="Quote" invalid errorText='This field is required'>
                <Input name="quote" className='form-input' value={quote} onChange={change => setQuote(change.target.value)} />
              </Field>
            ) : (
              <Field label="Quote">
                <Input name="quote" className='form-input' value={quote} onChange={change => setQuote(change.target.value)} />
              </Field>
            )}

            {authorInvalid ?
              <Field label="Author" invalid errorText='This field is required'>
                <Input name="author" className='form-input' value={author} onChange={change => setAuthor(change.target.value)} />
              </Field> : 
              <Field label="Author">
              <Input name="author" className='form-input' value={author} onChange={change => setAuthor(change.target.value)} />
            </Field>
            }
          </Fieldset.Content>

          <Button type="submit" alignSelf="flex-start" className='form-btn'>
            Create
          </Button>
        </form>

      </Fieldset.Root>

      <Button className='btn' variant='outline' onClick={() => {
        navigate('/myquotes')
      }}>See my quotes</Button>
    </div>
  )
}

export default Inicio