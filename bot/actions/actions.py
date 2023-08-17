# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List
#
# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher
#
#
# class ActionHelloWorld(Action):
#
#     def name(self) -> Text:
#         return "action_hello_world"
#
#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
#
#         dispatcher.utter_message(text="Hello World!")
#
#         return []
# actions.py
import requests
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher

class ActionCheckStockStatus(Action):
    def name(self) -> str:
        return "action_check_stock_status"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: dict) -> list:
        # Replace with your actual stock market API URL and parameters
        val  = tracker.get_slot("company")
        url = "https://realstonks.p.rapidapi.com/TSLA" 
        headers = {
          "X-RapidAPI-Key": "64c5af6249msh84d688e566718ecp1443b4jsn556ad4ad746c",
          "X-RapidAPI-Host": "realstonks.p.rapidapi.com"
        }

        response = requests.get(url, headers=headers)
        print(response.json())
        ans = response.json()
        dispatcher.utter_message(text=ans)
        return []

# api_url = 'https://api.api-ninjas.com/v1/quotes?category={}'.format(category)
# response = requests.get(api_url, headers={'X-Api-Key': 'YOUR_API_KEY'})
# if response.status_code == requests.codes.ok:
#     print(response.text)
# else:
#     print("Error:", response.status_code, response.text)

# fetch("https://type.fit/api/quotes")
  # .then(function(response) {
  #   return response.json();
  # })
  # .then(function(data) {
  #   console.log(data);
  # });