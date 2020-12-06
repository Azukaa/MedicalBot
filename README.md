# MedicalBot

_This repo contains the chatbot created for the telemedicine website `quichealth.com.ng`. The purpose of the bot is to perform pre-consultation whereby collating some relevant
responses from the patient before sending to the database that thereafter forwards the responses to the Doctor of choice choses initially. Some responses from the bot are gotten
from the ML model created, this can be found in the MedicalBotModelAPI repo._

To run the app, run:
`npm start`

The API used to communicate with the model is found in the `ActionProvider2.js`, the api has been hosted on heroku, but it can always be changed to that of the local host if the
model repo is cloned.
