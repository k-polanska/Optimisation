import parser
from math import *


def parse():
    #formula = "sin(x)*x**2"
    formula = input("enter f(x): ")
    a = int(input("enter interval. a = "))
    b = int(input("b = "))

    code = parser.expr(formula).compile()

    return code, a, b


def goldenSection(code, a ,b):

    alpha = 0.618       # correction coefficient
    epsilon = 0.1       # required  tolerance of calculations

    # step 0
    L = a + (1 - alpha)*(b - a)
    N = a + alpha*(b - a)
    A = a
    B = b
    n = 1

    while 1:
        # step 1
        if B - A < epsilon:
            x = (A + B) / 2
            print(eval(code))
            print("n = ", n)
            return
        else:
            x = L
            y1 = eval(code)

            x = N
            y2 = eval(code)

            if y1 > y2:
                # step 2
                A = L
                L = N
                N = A + alpha*(B - A)
            else:
                # step 3
                B = N
                N = L
                L = A + (1 - alpha) * (B - A)
            n = n+1


if __name__ == "__main__":
    code, a, b = parse()
    goldenSection(code, a ,b)