/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable padded-blocks */

const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51KLuaGKANSeUz9Rc8zbS9LOy07hX8NeqWeuIN4QURFx8uXn0oc0FT3eMIgJQmxzclSNuCovnaQMHSZrb5ZRgz7Aj00eZpZAwhX')

// API

// App config

const app = express();

// Middlewares

app.use(cors({ origin: true }))
app.use(express.json())

// API routes

app.get("/", (request, response) => response.status(200).send("Hello World"))

app.post("/payments/create", async (request, response) => {

  const total = request.query.total
  console.log("Payment Request Recieved BOOM!", total)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })
})


// Listen commands


exports.api = functions.https.onRequest(app)

