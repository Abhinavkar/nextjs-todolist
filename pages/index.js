import { Card, Grid, Text, Button, Row, Input } from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [addItem, setAddItem] = useState("");
  const [updateItem, setUpdateItem] = useState("");
  const [selectedTask, setSelectedTask] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      setUpdateItem(selectedTask);
    } else {
      setUpdateItem("");
    }
  }, [isEditMode, selectedTask]);

  function removeItems(taskName) {
    setTasks(tasks.filter((task) => task !== taskName));
  }

  function AddItems() {
    if (addItem !== "" && !tasks.includes(addItem)) {
      setTasks([...tasks, addItem]);
      setAddItem("");
    }
  }

  function editTask(taskName) {
    setSelectedTask(taskName);
    setIsEditMode(true);
  }

  function updateTask(updatedTask) {
    setTasks(tasks.map((task) => (task === selectedTask ? updatedTask : task)));
    setSelectedTask("");
    setIsEditMode(false);
  }

  return (
    <>
      <div style={{ width: "100%" }}>
        <Grid.Container gap={1} justify="center">
          <Grid xs={12} md={6}>
            <Card>
              <Card.Header css={{justifyContent:"center"}}>
                <Text b>ToDo List</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body>
                {tasks.map((task) => (
                  <Text key={task.index}>
                    {task}
                    <Row justify="flex-end">
                      <Button
                        ml={10}
                        ur={20}
                        size="small"
                        css={{ padding: "0.5rem 1rem", marginRight: "0.5rem" }}
                        onClick={() => removeItems(task)}
                        color="gradient"
                      >
                        Remove Task
                      </Button>
                      <Button
                        size="small"
                        css={{ padding: "0.5rem 1rem" }}
                        onClick={() => editTask(task)}
                        color="gradient"
                      >
                        Edit Task
                      </Button>
                    </Row>
                  </Text>
                ))}
                {isEditMode && (
                  <Card css={{ maxWidth: "330px" }}>
                    <Card.Body>
                      <Input
                        placeholder="Updated Item Name"
                        value={updateItem}
                        onChange={(e) => setUpdateItem(e.target.value)}
                      />
            <Button ml={10} color="gradient" onClick={() => updateTask(updateItem)}>
              Update
            </Button>
          </Card.Body>
        </Card>
      )}
                <Input
                  placeholder="Task Name"
                  value={addItem}
                  onChange={(e) => {
                    setAddItem(e.target.value);
                  }}
                />
                <Button ml={10} onClick={AddItems} color="gradient">
                  Add Task
                </Button>
                
              </Card.Body>
              <Card.Divider />
              <Card.Footer css={{justifyContent:"center"}}>Made By Abhinav Kar ❤️</Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </div>
     
    </>
  );
}
