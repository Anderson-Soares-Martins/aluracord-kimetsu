import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import appConfig from '../config.json'
import { useRouter } from 'next/router';
import React from 'react'

function Title(props) {
  console.log(props)
  const Tag = props.tag || "h1"
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals[900]};
                    font-size: 24 px;
                    font-weight: 600;
                }
            `}</style>
    </>
  )
}

function HomePage() {
  // const username = 'Anderson-Soares-Martins';
  const [username, setUsername] = React.useState('Anderson-Soares-Martins')
  const validName = () => {
    if(username.length<3){
      return ""
    }else{
      return username
    }
  }
  const name = validName()
  console.log(name)
  const router = useRouter()

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[200],
          backgroundImage: 'url(https://wallpaperaccess.com/full/1097651.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          opacity: '0.95',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '800px',
            borderRadius: '40px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[100],
            opacity: '0.95',
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={(event) => {
              event.preventDefault();
              console.log('Alguém submeteu o form')
              router.push('/chat')
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Title tag="h2">Bem vindo ao projeto!</Title>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              value={username}
              onChange={(event) => {
                console.log(event)
                console.log('Usuario digitou', event.target.value)
                // Onde ta o valor?
                const valor = event.target.value
                // Trocar o valor da variavel
                setUsername(valor)
              }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[100],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[600],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.primary[400],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[300],
              borderRadius: '50px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}

              src={`https://github.com/${name}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[100],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {name}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}

export default HomePage