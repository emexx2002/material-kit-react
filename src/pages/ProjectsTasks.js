import React, { useState } from 'react'
import { Flex, Heading, Text } from "@chakra-ui/react";
import { DragDropContext } from "react-beautiful-dnd";
import Column from '../sections/@dashboard/projects/Columns';


const initialData = {
    tasks: {
      1: { id: 1, content: "Configure Next.js application" },
      2: { id: 2, content: "Configure Next.js and tailwind " },
      3: { id: 3, content: "Create sidebar navigation menu" },
      4: { id: 4, content: "Create page footer" },
      5: { id: 5, content: "Create page navigation menu" },
      6: { id: 6, content: "Create page layout" },
      7: { id: 7, content: "Create page layouts" },
      8: { id: 8, content: "Create page layouts" },
    },
    columns: {
      "column-1": {
        id: "column-1",
        title: "TO-DO",
        taskIds: [1, 2, 3, 4, 5, 6,7,8],
      },
      "column-2": {
        id: "column-2",
        title: "IN-PROGRESS",
        taskIds: [],
      },
      "column-3": {
        id: "column-3",
        title: "COMPLETED",
        taskIds: [],
      },
    },
    // Facilitate reordering of the columns
    columnOrder: ["column-1", "column-2", "column-3"],
};

const reorderColumnList = (sourceCol, startIndex, endIndex) => {
    const newTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = newTaskIds.splice(startIndex, 1);
    newTaskIds.splice(endIndex, 0, removed);
  
    const newColumn = {
      ...sourceCol,
      taskIds: newTaskIds,
    };
  
    return newColumn;
  };

function ProjectsTasks() {
    
    const [state, setState] = useState(initialData);

    const onDragEnd = (result) => {
      const { destination, source } = result;
      console.log(destination, source)
  
      // If user tries to drop in an unknown destination
      if (!destination) return;
      
  
      // if the user drags and drops back in the same position
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }
  
      // If the user drops within the same column but in a different positoin
      const sourceCol = state.columns[source.droppableId];
      const destinationCol = state.columns[destination.droppableId];
  
      if (sourceCol.id === destinationCol.id) {
        const newColumn = reorderColumnList(
          sourceCol,
          source.index,
          destination.index
        );
  
        const newState = {
          ...state,
          columns: {
            ...state.columns,
            [newColumn.id]: newColumn,
          },
        };
        setState(newState);
        return;
      }
  
      // If the user moves from one column to another
      const startTaskIds = Array.from(sourceCol.taskIds);
      const [removed] = startTaskIds.splice(source.index, 1);
      const newStartCol = {
        ...sourceCol,
        taskIds: startTaskIds,
      };
  
      const endTaskIds = Array.from(destinationCol.taskIds);
      endTaskIds.splice(destination.index, 0, removed);
      const newEndCol = {
        ...destinationCol,
        taskIds: endTaskIds,
      };
  
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newStartCol.id]: newStartCol,
          [newEndCol.id]: newEndCol,
        },
      };
  
      setState(newState);
    };

    
  return (
    <DragDropContext onDragEnd={onDragEnd}>
          <Flex
        flexDir="column"
        bg="main-bg"
        maxH="80vh"
        w="full"
        color="white-text"
      >
        {/* <Flex py="4rem" flexDir="column" align="center">
          <Heading fontSize="3xl" fontWeight={600}>
            React Beautiful Drag and Drop
          </Heading>
          <Text fontSize="20px" fontWeight={600} color="subtle-text">
            react-beautiful-dnd
          </Text>
        </Flex> */}

        <Flex justify="space-between" width="100%" shrink={0} overflowX="auto"  sx={{
    '&::-webkit-scrollbar': {
      width: 'thin',
      borderRadius: '8px',
      backgroundColor: `rgba(0, 0, 0, 0.05)`,
    },scrollbarWidth:"none"
    
  }} px="4rem">
          {state.columnOrder.map((columnId) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);

            return <Column key={column.id} column={column} tasks={tasks} />;
          })}
        </Flex>
      </Flex>
        
      
    </DragDropContext>
  )
}

export default ProjectsTasks