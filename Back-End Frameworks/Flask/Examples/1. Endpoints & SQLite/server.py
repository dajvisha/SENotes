from flask import Flask
from flask import request
app = Flask(__name__)

# Server Routes
@app.route('/puppies', methods=['GET', 'POST'])
def puppiesFunction():
    if request.method == 'GET':
      return getAllPuppies()
    elif request.method == 'POST':
      return makeANewPuppy()

@app.route('/puppies/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def puppiesFunctionId(id):
    if request.method == 'GET':
        return getPuppy(id)
    
    if request.method == 'PUT':
        return updatePuppy(id)
    
    if request.method == 'DELETE':
        return deletePuppy(id)

# Server Functions
def getAllPuppies():
    print("Here 3")
    return "Getting All the puppies!"
  
def makeANewPuppy():
    return "Creating A New Puppy!"

def getPuppy(id):
    return "Getting Puppy with id %s" % id
	
def updatePuppy(id):
    return "Updating a Puppy with id %s" % id

def deletePuppy(id):
    return "Removing Puppy with id %s" % id

# Start Server
if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=5000)
