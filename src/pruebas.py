

def elegirElMayot(n1: int, n2: int):
    if n1 > n2:
        return n1
    elif n2 > n1:
        return n2
    elif n1 == n2:
        raise Exception("Los valores no pueden ser iguales.")


print(elegirElMayot(4, 9))
print("el mero mero sabro provero")
print(elegirElMayot(94,1239,))
print(elegirElMayot(5,5,))






