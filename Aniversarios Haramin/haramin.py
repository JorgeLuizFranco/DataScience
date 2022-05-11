from datetime import date
import pandas as pd;

df= pd.read_csv('aniversarios.csv');
df.columns=['nomes','datas'];
print(df.head());
df.to_csv('aniversario.csv', encoding='utf-8');
