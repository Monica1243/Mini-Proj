import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

celsius = np.array([-40, -10,  0,  8, 15, 22,  38], dtype = float)
fahrenheit = np.array([-40,  14, 32, 46, 59, 72, 100], dtype = float)

for i,j in enumerate(celsius):
    print(f"{j} c = {fahrenheit[i]} f")
    
model = tf.keras.Sequential([
tf.keras.layers.Dense(units=1, input_shape = [1])
])

model.compile(loss = 'mean_absolute_error',
             optimizer = tf.keras.optimizers.Adam(0.1))
             
training = model.fit(celsius, fahrenheit, epochs=650, verbose = False)

plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.plot(training.history['loss'])

print(model.predict([100.0]))

print(f"Weight : {model.get_weights()[0]} Bias : {model.get_weights()[1]}")

#Using hidden layers

model1 = tf.keras.layers.Dense(units=1, input_shape = [1])
model2 = tf.keras.layers.Dense(units=4)
model3 = tf.keras.layers.Dense(units=1)

model = tf.keras.Sequential([
    model1, model2, model3
])

model.compile(loss = 'mean_squared_error', optimizer = tf.keras.optimizers.Adam(0.1))
model.fit(celsius, fahrenheit, epochs = 600, verbose = False)
print(model.predict([100.0]))

print(f"Weight , Bias : {model1.get_weights()}")
print(f"Weight , Bias : {model2.get_weights()}")
print(f"Weight , Bias : {model3.get_weights()}")


# Using a file

file = pd.read_csv('Celsius_Fahrenheit_dataset_1000.csv')

file.head()

file.tail(2)

file.describe()

from sklearn.model_selection import train_test_split

file['Celsius']

X = file['Celsius']
y = file['Fahrenheit']
x_train, x_test,y_train, y_test = train_test_split(X,y, test_size = 0.15, random_state = 1)

model = tf.keras.Sequential([
    tf.keras.layers.Dense(units = 1, input_shape = [1])
])

y_train.shape

model.compile(loss = 'mean_squared_error',
             optimizer = tf.keras.optimizers.Adam(0.1))

model.fit(x_train, y_train, epochs = 500, verbose = True)

plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.plot(training.history['loss'])

pred = model.predict([y_test])
print(pred)

print(f"{model.get_weights()}")

