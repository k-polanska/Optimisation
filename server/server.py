from flask import Flask, jsonify, request
from flask_cors import CORS
import parser
from math import *

app = Flask(__name__)
CORS(app)

@app.route("/calculate")
def hello():  
    f = request.args.get('formula')
    a = float(request.args.get('rangeA'))
    b = float(request.args.get('rangeB'))
    alpha = float(request.args.get('alpha'))
    epsilon = float(request.args.get('epsilon'))

    formula = parse_with_params(f)
    ret = golden_section(formula,a,b,alpha,epsilon)    

    return jsonify(ret)



def parse_with_params(f):
    code = parser.expr(f).compile()

    return code

def golden_section(code,a,b,alpha,epsilon):    
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
            ret = {
                "minimum": eval(code),
                "iterNumber": n
            }            
            return ret
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