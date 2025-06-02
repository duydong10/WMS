def mapping(df, begin, end):
    for i in range(len(df)):
        if df["PosCode"][i] == begin:
            xs = df["XT"][i]
            ys = df["YT"][i]
            mapIDs = df["MapCode"][i]
        elif df["PosCode"][i] == end:
            xe = df["XT"][i]
            ye = df["YT"][i]
            mapIDe = df["MapCode"][i]
    return {
        "begin": f"{xs}{mapIDs}{ys}",
        "end": f"{xe}{mapIDe}{ye}",
    }