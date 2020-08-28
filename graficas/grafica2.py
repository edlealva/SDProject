import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("Djangoapp.csv", sep=";")

df = df.iloc[:,:9]

capacidades= df['CAPACIDAD (MB)']
#capacidades.unique()
listcap = list(capacidades.unique())

cap_100 = df.loc[df['CAPACIDAD (MB)']==100]
cap_55 = df.loc[df['CAPACIDAD (MB)']==55]
cap_50 = df.loc[df['CAPACIDAD (MB)']==50]
cap_40 = df.loc[df['CAPACIDAD (MB)']==40]
cap_30 = df.loc[df['CAPACIDAD (MB)']==30]
cap_20 = df.loc[df['CAPACIDAD (MB)']==20]

#TIEMPO VS MEMORIA USADA 
plt.plot(cap_100['TIME'], cap_100['MEM_USAGE(MB)'])
plt.plot(cap_55['TIME'], cap_55['MEM_USAGE(MB)'])
plt.plot(cap_50['TIME'], cap_50['MEM_USAGE(MB)'])
plt.plot(cap_40['TIME'], cap_40['MEM_USAGE(MB)'])
plt.plot(cap_30['TIME'], cap_30['MEM_USAGE(MB)'])
plt.plot(cap_20['TIME'], cap_20['MEM_USAGE(MB)'])
plt.legend(listcap)
plt.show()

#TIEMPO VS CPU USADO / 1.70GHZ 
plt.plot(cap_100['TIME'], cap_100['CPU(%)'])
plt.plot(cap_55['TIME'], cap_55['CPU(%)'])
plt.plot(cap_50['TIME'], cap_50['CPU(%)'])
plt.plot(cap_40['TIME'], cap_40['CPU(%)'])
plt.plot(cap_30['TIME'], cap_30['CPU(%)'])
plt.plot(cap_20['TIME'], cap_20['CPU(%)'])
plt.legend(listcap)
plt.show()

#TIEMPO VS TRAFICO DE RED QUE ENTRA
plt.plot(cap_100['TIME'], cap_100['NET_input (kb)'])
plt.plot(cap_55['TIME'], cap_55['NET_input (kb)'])
plt.plot(cap_50['TIME'], cap_50['NET_input (kb)'])
plt.plot(cap_40['TIME'], cap_40['NET_input (kb)'])
plt.plot(cap_30['TIME'], cap_30['NET_input (kb)'])
plt.plot(cap_20['TIME'], cap_20['NET_input (kb)'])
plt.legend(listcap)
plt.show()


#TIEMPO VS TRAFICO DE RED QUE SALE
plt.plot(cap_100['TIME'], cap_100['NET_output (kb)'])
plt.plot(cap_55['TIME'], cap_55['NET_output (kb)'])
plt.plot(cap_50['TIME'], cap_50['NET_output (kb)'])
plt.plot(cap_40['TIME'], cap_40['NET_output (kb)'])
plt.plot(cap_30['TIME'], cap_30['NET_output (kb)'])
plt.plot(cap_20['TIME'], cap_20['NET_output (kb)'])
plt.legend(listcap)
plt.show()