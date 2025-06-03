def mapping(df, posCode: str):
    for i in range(len(df)):
        if df["PosCode"][i] == posCode:
            xs = df["XT"][i]
            ys = df["YT"][i]
            mapIDs = df["MapCode"][i]
    return (f"{xs}{mapIDs}{ys}")