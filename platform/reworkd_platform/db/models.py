from sqlalchemy import Column, Integer, String, DateTime, func

from reworkd_platform.db.base_class import Base

class Agent(Base):
    __tablename__ = "agents"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    state = Column(String, default="stopped")
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    def start(self):
        self.state = "running"

    def stop(self):
        self.state = "stopped"