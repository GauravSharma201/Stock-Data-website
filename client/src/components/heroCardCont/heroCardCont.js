import React from "react";
import HeroCard from "../heroCard/heroCard";
import "./heroCardCont.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function HeroCardCont() {
  return (
    <>
      <DragDropContext>
        <Droppable droppableId="heroCardContId">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="heroCardCont"
            >
              <Draggable draggableId="heroCardAMZNId" index={1}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <HeroCard
                      logo={"./assets/AMZN.svg"}
                      name={"amz1"}
                      value={"15 USD"}
                    />
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="heroCardGOOGLId" index={2}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <HeroCard
                      logo={"./assets/AMZN.svg"}
                      name={"amz2"}
                      value={"15 USD"}
                    />
                  </div>
                )}
              </Draggable>
              <Draggable draggableId="heroCardFBId" index={3}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <HeroCard
                      logo={"./assets/AMZN.svg"}
                      name={"amz3"}
                      value={"15 USD"}
                    />
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

export default HeroCardCont;
