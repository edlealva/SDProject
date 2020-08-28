import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("ren_back_nginx_1.csv", sep=";", decimal=",")

capacidades= df['CAPACIDAD (MiB)']
#capacidades.unique()
listcap = list(capacidades.unique())

cap_100 = df.loc[df['CAPACIDAD (MiB)']==100]
cap_55 = df.loc[df['CAPACIDAD (MiB)']==55]
cap_50 = df.loc[df['CAPACIDAD (MiB)']==50]
cap_40 = df.loc[df['CAPACIDAD (MiB)']==40]
cap_30 = df.loc[df['CAPACIDAD (MiB)']==30]
cap_20 = df.loc[df['CAPACIDAD (MiB)']==20]

#TIEMPO VS MEMORIA USADA 
plt.plot(cap_100['TIME'], cap_100['MEM_USAGE (MiB)'], linewidth=3.0)
plt.plot(cap_55['TIME'], cap_55['MEM_USAGE (MiB)'], linewidth=3.0)
plt.plot(cap_50['TIME'], cap_50['MEM_USAGE (MiB)'], linewidth=3.0)
plt.plot(cap_40['TIME'], cap_40['MEM_USAGE (MiB)'], linewidth=3.0)
plt.plot(cap_30['TIME'], cap_30['MEM_USAGE (MiB)'], linewidth=3.0)
plt.legend(listcap)
plt.show()


#TIEMPO VS CPU USADO / 1.70GHZ 
plt.plot(cap_100['TIME'], cap_100['CPU (%)'])
plt.plot(cap_55['TIME'], cap_55['CPU (%)'])
plt.plot(cap_50['TIME'], cap_50['CPU (%)'])
plt.plot(cap_40['TIME'], cap_40['CPU (%)'])
plt.plot(cap_30['TIME'], cap_30['CPU (%)'])
#plt.plot(cap_20['TIME'], cap_20['MEM_USAGE (MiB)'])
plt.legend(listcap)
plt.show()


#TIEMPO VS TRAFICO DE RED QUE ENTRA
plt.plot(cap_100['TIME'], cap_100['NET_Input (kB)'])
plt.plot(cap_55['TIME'], cap_55['NET_Input (kB)'])
plt.plot(cap_50['TIME'], cap_50['NET_Input (kB)'])
plt.plot(cap_40['TIME'], cap_40['NET_Input (kB)'])
plt.plot(cap_30['TIME'], cap_30['NET_Input (kB)'])
#plt.plot(cap_20['TIME'], cap_20['MEM_USAGE (MiB)'])
plt.legend(listcap)
plt.show()


#TIEMPO VS TRAFICO DE RED QUE SALE
plt.plot(cap_100['TIME'], cap_100['NET_Output (kB)'])
plt.plot(cap_55['TIME'], cap_55['NET_Output (kB)'])
plt.plot(cap_50['TIME'], cap_50['NET_Output (kB)'])
plt.plot(cap_40['TIME'], cap_40['NET_Output (kB)'])
plt.plot(cap_30['TIME'], cap_30['NET_Output (kB)'])
#plt.plot(cap_20['TIME'], cap_20['MEM_USAGE (MiB)'])
plt.legend(listcap)
plt.show()

