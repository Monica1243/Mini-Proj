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

from typing import Any, Text, Dict, List
from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from pymongo import MongoClient

class ActionCheckRoomAvailability(Action):
    def name(self) -> Text:
        return "action_check_room_availability"

    def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        # Connect to MongoDB Atlas
        client = MongoClient("mongodb+srv://monicav1242003:Monica*12@cluster0.fypic3i.mongodb.net/")
        db = client["hotel_management"]
        rooms_collection = db["details"]

        # Query MongoDB to get available room count
        available_rooms = rooms_collection.count_documents({"Availability": "Available"})

        dispatcher.utter_message(f"We have {available_rooms} rooms available for booking.")

        return []
